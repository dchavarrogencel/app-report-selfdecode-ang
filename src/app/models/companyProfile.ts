import { CONST_GENCELL } from '../../environments/enviroment.variables';
/**
 * Modelo que hace referencia company para la generacion del pdf
 * @author dchavarro
 */
export class CompanyProfile {
    public logo: string=CONST_GENCELL.LOGO_GENCELL;
    public company_name: string=CONST_GENCELL.NOMBRE_COMPANIA;
    public website: string=CONST_GENCELL.WEB_SITE;
}