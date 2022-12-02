import { CompanyProfile } from './companyProfile';
export class RequestDocument {
    public white_labelled: boolean=true;
    public recommendation_type ='full';
    public report_id=''
    public profile_id=''
    public company_profile = new CompanyProfile();
    public lang ='';
}