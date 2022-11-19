import { Customization } from './customization';
export class RequestDocument {
    public white_labelled: boolean=false;
    public recommendation_type ='full';
    public report_id=''
    public profile_id=''
    public customization = new Customization();
}