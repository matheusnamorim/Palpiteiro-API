import Joi from 'joi';

const guessesSchemas = Joi.object({
    name: Joi.string().trim().required(),
	scoreboardTeamOne: Joi.number().min(0),
    scoreboardTeamTwo: Joi.number().min(0),
	winnerTeam: Joi.string().trim().required(),
	gamesId: Joi.number().min(1).required()
});

export {
    guessesSchemas
};