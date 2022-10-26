export class RecomendationTrait {
    public id?: string
    public recommendation_id?: string
    public trait_id?: string
    public effect?: number
    public evidence?: number

    public effect_heading?: string =''
    public general_description?: string=''
    public initial_score?: number
}