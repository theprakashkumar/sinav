type dispatchDetails = {
    type: string;
    payload: {
        quizId: number;
    };
};

export type CategoryCardType = {
    to: string;
    dispatchDetails: dispatchDetails;
    image: string;
    category: string;
};
