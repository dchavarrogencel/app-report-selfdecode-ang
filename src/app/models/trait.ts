import { FeedbackChoices } from './feedback.choices';
import { GaugeLabels } from './gauge.labels';
export class Trait {
    public id?: string
    public name?: string =''
    public slug?: string
    public model_type?: string
    public summary?: string
    public feedback_question?: string
    public feedback_choices?: Array<FeedbackChoices> = new Array<FeedbackChoices>();
    public statistic_type?: string
    public text?: string
    public text_header?: string
    public report_id?: string
    public gauge_labels?: Array<GaugeLabels> = new Array<GaugeLabels>();
    public disclaimer?: string
    public show_percentile?: boolean
    public gauge_type?: string
    public gauge_range_type?: string
    public gauge_coloring?: string
    public gauge_direction?: string
    public gauge_num_of_divisions?: string
}