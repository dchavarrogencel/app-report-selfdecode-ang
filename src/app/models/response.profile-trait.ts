import { Trait } from './trait';
import { GeneticVariants } from './genetic.variants';
export class ReponseProfileTrait {
    public id?: string
    public profile_id?: string
    public number_of_snp?: number
    public score?: number
    public trait_id?: string
    public trait?: Trait = new Trait();
    public scenario_id?: string
    public scenario_percentage?: string
    public trait_score_text?: string
    public personalized_text?: string
    public personalized_recommendation_text?: string
    public profile_report_id?: string
    public user_feedback?: string
    public genetic_variants?: Array<GeneticVariants> = new Array<GeneticVariants>();
}