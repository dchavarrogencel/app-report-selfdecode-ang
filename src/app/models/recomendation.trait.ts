/**
 * Modelo que hace referencia recomendacion de perfil
 * @author dchavarro
 */
export class RecomendationTrait {
    public id?: string
    public recommendation_id?: string
    public trait_id?: string
    public effect: number=0
    public evidence: number=0

    public effect_heading: string =''
    public general_description: string=''
    public initial_score: number=0
}