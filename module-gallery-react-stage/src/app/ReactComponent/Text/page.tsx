import React from 'react'
import { Text } from '@/components/Text'

const page = () => {
  return (
    <main className='p-10'>
        <div className="mb-10">
            <h1 className="text-[20px] font-bold mb-2">Text Component</h1>
            <p className="text-[15px] mb-4">The Text component is a polymorphic React component designed to render text or inline content using any valid HTML or custom component tag.</p>
            <p className="text-[15px] mb-4">It helps enforce semantic HTML, reusability, and consistency in styling and structure across your application.</p>
            <p className="text-[15px] mb-4">Instead of writing {`<h1>, <p>, <label>, <span>,`} etc., directly each time, you use Text and set the as prop to render any element type dynamically.</p>
            </div>

        <div className="wrap border p-5">
        <Text as="h1" className="text-lg mb-2 font-bold text-gray-600">What is Lorem Ipsum?</Text>
        <Text as="p" className="text-sm text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </Text>
        </div>
    </main>
  )
}

export default page