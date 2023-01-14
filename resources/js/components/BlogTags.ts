import { array } from "prop-types"
type tag = {
    tag: string,
    title: string,
    children: any[]
};
const BLOG_TAGS: tag[] = [
    {
        tag: 'p',
        title: 'Paragraph',
        children: [],
    },
    {
        tag: 'h',
        title: 'Heading',
        children: [
            { tag: 'h1', title: 'Heading 1' },
            { tag: 'h2', title: 'Heading 2' },
            { tag: 'h3', title: 'Heading 3' },
            { tag: 'h4', title: 'Heading 4' },
            { tag: 'h5', title: 'Heading 5' },
            { tag: 'h6', title: 'Heading 6' },
        ]
    }
];

export default BLOG_TAGS;