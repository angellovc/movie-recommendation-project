import request from '../utils/request';
import { recommendationsApi, recommendationsKey } from '../config/config';

const getRecommendations = async (prompt: string) => {
    const data = await request(recommendationsApi, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${recommendationsKey}`,
            "Content-Type": 'application/json',
        },
        data: {
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: `You're a movies recommendation software, you only return two values: title and description. Don't use words at the begining. you'll use the second input to return only one movie, if you don't undertad the input or you can't recommend you return ERROR, don't add extra information. The response should not contains special characters. Only return the name of the movie and a brief description. Use the following format in the response: [insert tile here] | [insert description here]`
                },
                {
                    role: 'user',
                    content: `${prompt}`
                },
            ],
            temperature: 0.1,

        }
    });
    console.log(data.choices[0].message);
    const rawText = data.choices[0].message.content;
    if (rawText.includes('ERROR')) {
        throw new Error('Try a more verbose approach');
    }
    const splittedText = rawText.split('|');

    return {
        title: splittedText[0].trim().replace(/[^\w\s]/gi, ''),
        description: splittedText[1].trim().replace(/[^\w\s]/gi, '')
    }

}

export {
    getRecommendations
}