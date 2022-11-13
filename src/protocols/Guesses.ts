export type Games = {
    id?: number,
    teamOne: string,
    teamTwo: string,
    status: boolean,
    type: string,
    createdAt?: Date | string
};

export type Guesses = {
    id?: number,
    name: string,
    scoreboardTeamOne?: number,
    scoreboardTeamTwo?: number,
    winnerTeam: string,
    gamesId: number,
    createdAt?: Date | string
};

export type Ranking = {
    id?: number,
    Name?: string,
    NumbersOfHits?: number
}