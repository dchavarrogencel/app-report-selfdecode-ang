import { RecomendationTrait } from './recomendation.trait';
import { SatisfiedConditions } from './satisfied.conditions';
export class ResponseRecomendationTrait {
    public id?: string
    public profile_report_id?: string
    public profile_recommendation_id?: string
    public recommendation_trait_id?: string
    public recommendation_trait?: RecomendationTrait = new RecomendationTrait();

    public is_relevant?: boolean
    public total_score?: number
    public satisfied_conditions?:  Array<SatisfiedConditions> = new  Array<SatisfiedConditions>();
}