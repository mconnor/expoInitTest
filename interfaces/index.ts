
import { ImageSourcePropType} from 'react-native';


export interface Post {
    slug: string;
    title: string;
    content?: string;
    metadata: {
        logo:ImageSourcePropType;
    };
}


export interface LogoType {
    imgix_url:ImageSourcePropType;
    url: ImageSourcePropType;
}

export interface Posts extends Array<Post> {
    allPosts?: Post[]
}


export interface Preview {
    preview: true | null;
}

export type FeaturedPostNPosts = Post & Posts;