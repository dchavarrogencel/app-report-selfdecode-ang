import {  Recomendation } from './recomendation';
export class ResponseRecomendation {
    public id?: string
    public profile_report_id?: string
    public recommendation_id?: string
    public recommendation = new Recomendation();
    public user_hidden?: boolean

    public is_relevant?: boolean
    public total_score?: number
    public effect?: number
    public evidence?: string

    public was_useful?: string
}