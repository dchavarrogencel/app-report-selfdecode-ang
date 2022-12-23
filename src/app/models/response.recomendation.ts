import {  Recomendation } from './recomendation';
/**
 * Modelo que hace referencia respuesta recomendacion
 * @author dchavarro
 */
export class ResponseRecomendation {
    public id?: string
    public profile_report_id?: string
    public recommendation_id?: string
    public recommendation = new Recomendation();
    public user_hidden?: boolean

    public is_relevant?: boolean
    public total_score?: number
    public effect: number=0
    public evidence: number=0

    public was_useful?: string
}