import { FC } from 'react'

interface ParagraphProps {
    text: string
}

const Paragraph: FC<ParagraphProps> = ({ text }) => {
    return <p className="text-gray-700">{text}</p>
}

export default Paragraph