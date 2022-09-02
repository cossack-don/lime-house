interface IItem {
    key: string;
    name: string;
    description: string,
    tags: string[],

}

export interface IStep {
    title: string;
    content: string;
    data?: IItem[]
}