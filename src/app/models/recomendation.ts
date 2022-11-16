export class Recomendation {
    public id?: string
    public report_id?: string
    public recommendation_type?: string
    public context?: string
    public illustration?: string

    public is_avoidance_recommendation?: boolean
    public is_treatment?: boolean
    public is_prevention?: boolean
    public name?: string=''

    public generic_text?: string=''
    public sentence?: string
    public slug?: string
    public default_frequency_value?: string
    public default_frequency_unit?: string

    public default_duration_value?: string
    public default_duration_unit?: string

    public conflicting_slugs?: []
    public related_marker_id?: string
    public hide_impact_evidence?: boolean
}