/**
 * Modelo que hace referencia las opciones de comentarios
 * @author dchavarro
 */
export class FeedbackChoices {
    public id?: string
    public answer_text?: string
    public display_order?: number
    public score_from?: number
    public score_to?: number
    public scenario_id?: string =''
}