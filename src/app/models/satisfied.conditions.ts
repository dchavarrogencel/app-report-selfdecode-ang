/**
 * Modelo que hace referencia condiciones satisfechas
 * @author dchavarro
 */
export class SatisfiedConditions {
    public id?: string
    public conditional_score?: number
    public conditional_text?: string
    public priority?: number
    public recommendation_trait_id?: string

    public evidence?: number
    public effect?: number
    public is_triggering?: boolean
    public genotype?: string
    public rsid?: string
    public snp_trigger_evidence?: number
    public condition_type?: string
}