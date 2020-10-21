import { Auth } from 'aws-amplify';

function createAWSAPi () {

    Object.freeze({
        signUp,
        signIn
    });

    async function signUp({email, password}) {
        try {
            const { user } = await Auth.signUp({
                username: email,
                password
            });
            return user;
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

    async function signIn({email, password}) {
        try {
            const user = await Auth.signIn(email, password);
        } catch (error) {
            console.log('error signing in', error);
        }
    }

}

export const AWS = createAWSAPi();