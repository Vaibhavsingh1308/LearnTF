"use client";

import React, {
  useState,
  useEffect,
  useRef,
  ReactNode,
  ChangeEvent,
  FocusEvent,
  FormEvent,
  useCallback,
} from "react";
import { cn } from "../utils";
import { usePathname } from "next/navigation";

interface AutoCompleteSearchProps {
  className?: string;
  children?: ReactNode;
  overlay?: boolean;
  value?: string;
  disable?: boolean;
  placeHolderText?: string;
  submitLabel?: string;
  closeLabel?: string;
  isControlledOpen?: boolean;
  autoSuggestion?: ReactNode;
  onFocus?: () => void;
  onKeyDown?: (e: unknown) => void;
  onBlur?: () => void;
  handleClose?: () => void;
  setIsControlledOpen?: (isOpen: boolean) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  [key: string]: unknown;
}

export const AutoComplete: React.FC<AutoCompleteSearchProps> = ({
  className = "",
  submitLabel = "Search-icon",
  closeLabel = "Close-icon",
  children,
  placeHolderText = "Search...",
  value = "",
  isControlledOpen,
  autoSuggestion,
  setIsControlledOpen,
  onChange,
  onFocus,
  onBlur,
  handleClose,
  handleSubmit,
  overlay,
  onKeyDown,
  disable,
  ...props
}) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const closeIconRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const effectiveIsOpen = isControlledOpen ?? isDropDownOpen;

  const closeDropDown = useCallback(() => {
    if (setIsControlledOpen) {
      setIsControlledOpen(false);
    } else {
      setIsDropDownOpen(false);
    }
  }, [setIsControlledOpen]);

  const openDropDown = useCallback(() => {
    if (setIsControlledOpen) {
      setIsControlledOpen(true);
    } else {
      setIsDropDownOpen(true);
    }
  }, [setIsControlledOpen]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      dropDownRef.current &&
      !dropDownRef.current.contains(event.target as Node) &&
      inputRef.current &&
      !inputRef.current.contains(event.target as Node) &&
      closeIconRef.current &&
      !closeIconRef.current.contains(event.target as Node)
    ) {
      closeDropDown();
    }
  }, [closeDropDown]);

  useEffect(() => {
    if (effectiveIsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [effectiveIsOpen, handleClickOutside]);

  useEffect(() => {
    closeDropDown();
  }, [pathname, closeDropDown]);

  useEffect(() => {
    if (effectiveIsOpen && overlay) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      inputRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      previousActiveElement.current?.blur();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [effectiveIsOpen, overlay]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDropDown();
    },
    [closeDropDown]
  );

  useEffect(() => {
    if (effectiveIsOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [effectiveIsOpen, handleKeyDown]);

  const handleBlur = (e: FocusEvent<HTMLDivElement | HTMLInputElement>) => {
    const relatedTarget = e.relatedTarget as Node | null;
    if (
      !dropDownRef.current?.contains(relatedTarget) &&
      !inputRef.current?.contains(relatedTarget) &&
      !closeIconRef.current?.contains(relatedTarget)
    ) {
      closeDropDown();
    }
    if (onBlur) onBlur();
  };

  return (
    <div className={cn(`autocomplete-search relative ${className}`)}>
      <div className="relative inputWrapper">
        <form
          role="form"
          onSubmit={(e) => {
            if (handleSubmit) handleSubmit(e);
          }}
        >
          <label htmlFor="Search Recipes" className="sr-only">
            Search Recipes
          </label>

          {/* ARIA-Expanded moved to parent wrapper */}
          <div aria-expanded={effectiveIsOpen}>
            <input
              id="Search Recipes"
              type="text"
              disabled={disable}
              placeholder={placeHolderText}
              value={value}
              onChange={(e) => onChange?.(e)}
              onFocus={() => {
                openDropDown();
                onFocus?.();
              }}
              onKeyDown={onKeyDown}
              onBlur={handleBlur}
              ref={inputRef}
              className="search-input w-full relative z-[9] text-grey900 placeholder:text-grey900
                border-grey350 py-[15px] rounded-[4px]"
              {...props}
            />
          </div>

          {effectiveIsOpen ? (
            <>
              <div
                ref={closeIconRef}
                className="tab absolute min-w-[40px] top-0 px-[8px] right-[0px] z-[9999] text-center 
                h-[100%] cursor-pointer flex items-center justify-center"
                onFocus={() => setIsDropDownOpen(true)}
                onBlur={handleBlur}
                tabIndex={0}
                onClick={handleClose}
              >
                <div
                  aria-label={closeLabel}
                  className="text-[14px] icon icon-close"
                ></div>
              </div>
              {overlay && (
                <div
                  className="overlay fixed w-full h-full z-[8] top-0 left-0 right-0 bg-[#4C4C4C80]/[.5]"
                  onClick={closeDropDown}
                ></div>
              )}
            </>
          ) : (
            <div
              className="open-button absolute min-w-[40px] top-0 px-[8px] right-[0px] z-[9999] text-center 
              h-[100%] cursor-pointer flex items-center justify-center"
            >
              <button onClick={openDropDown} aria-label={submitLabel}>
                <span className="text-[18px] icon icon-search"></span>
              </button>
            </div>
          )}
        </form>
        {autoSuggestion}
      </div>
      {effectiveIsOpen && children && (
        <div
          ref={dropDownRef}
          className="dropDown bg-brandWhite pt-[12px] z-[9999] mt-[1px] absolute w-[100%] pb-[24px]"
          tabIndex={-1}
          onFocus={() => setIsDropDownOpen(true)}
          onBlur={handleBlur}
        >
          <div className="dropDown-content">
            <div className="dropDown-body">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};
