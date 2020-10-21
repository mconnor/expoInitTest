



export interface Post {
    slug: string;
    title: string;
    content?: string;
    metadata?: any;
}




export interface Posts extends Array<Post> {
    allPosts?: Post[]
}


export interface Preview {
    preview: true | null;
}

export type FeaturedPostNPosts = Post & Posts;