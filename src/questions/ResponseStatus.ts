import { Question } from '@serenity-js/core';
import { LastResponse } from '@serenity-js/rest';

export const ResponseStatus = () =>
    Question.about<number>('the response status', async actor => {
        const response = await LastResponse.body();
        return response.status;
    });
