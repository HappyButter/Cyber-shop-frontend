import { PromoList, PromoForm } from 'components'
import { Middlepane } from 'styles/Middlepane.css';
import 'styles/verticalBoxes.css';

const PromoManagement = () => {
    return (
        <Middlepane>
            <div className="left">
                <PromoList/>
            </div>
            <div className="right">
                <PromoForm/>
            </div>
        </Middlepane>
    )
}

export default PromoManagement;