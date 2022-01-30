export class Match {
  season: number;
  round: number;
  date: Date;
  stadium: string;
  homeTeamGoals: number;
  visitorTeamGoals: number;
  homeTeam: string;
  visitorTeam: string;
  visitorTeamCrest: string;
  homeTeamCrest: string;
  matchNumber: number;
  division: string;

  constructor({
    season = null,
    round = null,
    date = null,
    stadium = null,
    homeTeamGoals = null,
    visitorTeamGoals = null,
    homeTeam = null,
    visitorTeam = null,
    visitorTeamCrest = null,
    homeTeamCrest = null,
    matchNumber = null,
    division = null,
  }) {
    this.season = season;
    this.round = round;
    this.date = date;
    this.stadium = stadium;
    this.homeTeam = homeTeam;
    this.homeTeamCrest = homeTeamCrest;
    this.homeTeamGoals = homeTeamGoals;
    this.visitorTeam = visitorTeam;
    this.visitorTeamGoals = visitorTeamGoals;
    this.visitorTeamCrest = visitorTeamCrest;
    this.matchNumber = matchNumber;
    this.division = division;
  }
}
