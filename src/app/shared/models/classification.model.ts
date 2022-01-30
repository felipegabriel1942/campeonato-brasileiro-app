export class Classification {
  team: string;
  teamCrest: string;
  victories: number;
  ties: number;
  defeats: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalsDifference: number;
  totalMatches: number;

  constructor({
    team = null,
    teamCrest = null,
    victories = null,
    ties = null,
    defeats = null,
    points = null,
    goalsFor = null,
    goalsAgainst = null,
    goalsDifference = null,
    totalMatches = null,
  }) {
    this.team = team;
    this.teamCrest = teamCrest;
    this.victories = victories;
    this.ties = ties;
    this.defeats = defeats;
    this.points = points;
    this.goalsFor = goalsFor;
    this.goalsAgainst = goalsAgainst;
    this.goalsDifference = goalsDifference;
    this.totalMatches = totalMatches;
  }
}
