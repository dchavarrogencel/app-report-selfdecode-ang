/**
 * Modelo que hace referencia reporte
 * @author dchavarro
 */
export class Report {
    public id: string='';
    public name?: string
    public slug?: string
    public report_type?: string
    public summary?: string

    public illustration?: string
    public version?: string
    public area?: []
    public is_sticky?: boolean

    public listing_type?: string
    public visible_to?: []
    public visible_to_genders?: []
    public text?: string
    public text_header?: string

    public image: string=''
    public color?: string

    public priority?: number
    public learn_more_link?: string

    public max_recs?: string
    public has_been_updated?: boolean
    public translation_verified?: boolean
    public idProfileReport?: string;
    public status?: string;
    public seleccionado=false;
    public request_id='';
}