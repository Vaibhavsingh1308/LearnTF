'use client';
import React, { useState, forwardRef, useEffect, useRef } from "react";
import { useOnClickOutside } from '../utils/hooks/useOnClickOutside';
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export interface Option {
    optionname: string;
    optionval: string;
}

export interface SelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    onChange?: (value: string) => void;
    defaultValue?: string;
    selectAriaLabel?: string;
    options: Option[];
    error?: boolean;
    checked?: boolean;
    scroll?: boolean;
    defaultLabel?: string;
    icon?: React.ReactNode;
    disabled?: boolean;
}

export const Select = forwardRef<HTMLDivElement, React.PropsWithChildren<SelectProps>>((
    {
        options,
        onChange,
        className,
        checked,
        scroll,
        selectAriaLabel,
        defaultValue = '',
        defaultLabel,
        error,
        icon,
        disabled,
        ...rest
    },
    ref
) => {
    const customRef = useRef<HTMLDivElement | null>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const firstListItemRef = useRef<HTMLLIElement>(null);

    const [toggle, setToggle] = useState(false);
    const getLabel = options.find(item => item.optionval === defaultValue)?.optionname ?? '';
    const [active, setActive] = useState(getLabel);

    useEffect(() => {
        setActive(getLabel);
    }, [getLabel]);

    const onHandleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            setToggle((prev) => !prev);

            setTimeout(() => {
                firstListItemRef.current?.focus();
            }, 0);
        }
    };

    const onItemHandleKeyDown = (e: React.KeyboardEvent, value: string) => {
        if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            const label = options.find(item => item.optionval === value)?.optionname ?? '';
            setActive(label);
            onChange?.(value);
            setToggle(false);
        }
    };

    const handleItemClick = (value: string) => {
        const label = options.find(item => item.optionval === value)?.optionname ?? '';
        setActive(label);
        onChange?.(value);
        setToggle(false);
    };

    const handleToggle = () => {
        listRef.current?.focus();
        setToggle(prev => !prev);
    };

    useOnClickOutside(customRef, () => setToggle(false));

    const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, index: number) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            const direction = e.key === 'ArrowDown' ? 1 : -1;
            const nextIndex = (index + direction + options.length) % options.length;
            const nextElement = listRef.current?.querySelectorAll('li')[nextIndex] as HTMLLIElement | null;
            nextElement?.focus();
        }
        if (e.key === 'Tab') {
            const isLastItem = index === options.length - 1;
            const isFirstItem = index === 0;
            if ((!e.shiftKey && isLastItem) || (e.shiftKey && isFirstItem)) {
                setToggle(false);
            }
        }
    };

    const ChevronUpIcon = FaChevronUp as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
    const ChevronDownIcon = FaChevronDown as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

    return (
        <div
            ref={(node) => {
                customRef.current = node;
                if (typeof ref === 'function') ref(node);
                else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
            }}
            className={`relative ${className}`}
            {...rest}
        >
            <button
                tabIndex={0}
                onKeyDown={onHandleKeyDown}
                onClick={handleToggle}
                aria-expanded={toggle}
                aria-label={selectAriaLabel}
                type="button"
                disabled={disabled}
                className={`${error ? 'border-brandError' : 'border-[#d6d6d6]'} ${disabled ? 'cursor-not-allowed border-grey300 bg-grey300 opacity-50' : ''} w-full text-left border rounded-[4px] pt-[15px] pb-[12px] pl-[20px] pr-[40px] text-brandBlack text-[14px] leading-normal relative`}
            >
                <span className="line-clamp-1">{defaultLabel && active === defaultValue ? defaultLabel : active}</span>
                <span className="absolute top-1/2 -translate-y-1/2 right-[20px]">
                    {icon || (
                        toggle ? (
                            <ChevronUpIcon className="w-[12px] h-[12px] text-brandBlack" />
                        ) : (
                            <ChevronDownIcon className="w-[12px] h-[12px] text-brandBlack" />
                        )
                    )}
                </span>
            </button>

            <ul
                role="listbox"
                ref={listRef}
                className={`shadow-[0_4px_30px_0px_rgba(0,0,0,0.07)] rounded-[5px] z-10 bg-brandWhite py-[0px] absolute left-0 top-full w-full ${scroll ? 'overflow-auto max-h-[200px] scroll-bar-grey' : 'overflow-hidden '} ${toggle ? 'block' : 'hidden'}`}
            >
                {options.map((item, key) => (
                    <li
                        role="option"
                        aria-selected={active === item.optionname}
                        tabIndex={0}
                        key={item.optionval}
                        data-value={item.optionval}
                        onClick={() => handleItemClick(item.optionval)}
                        onKeyDown={(e) => {
                            handleKeyDown(e, key);
                            onItemHandleKeyDown(e, item.optionval);
                        }}
                        ref={key === 0 ? firstListItemRef : null}
                        className={`tab flex gap-3 items-center text-base text-brandBlack py-2 px-4 hover:bg-grey300 hover:text-brandBlack cursor-pointer 
                            ${active === item.optionname ? 'bg-grey300' : ''}`}
                    >
                        {checked && active === item.optionname && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                                <path d="M6.55156 12.9996L0.851562 7.29961L2.27656 5.87461L6.55156 10.1496L15.7266 0.974609L17.1516 2.39961L6.55156 12.9996Z" fill="black" />
                            </svg>
                        )}
                        {item.optionname}
                    </li>
                ))}
            </ul>
        </div>
    );
});

Select.displayName = "Select";
