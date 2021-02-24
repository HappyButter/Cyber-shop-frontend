import { useState } from 'react';
import { PromoList, PromoForm } from 'components'
import { Middlepane } from 'styles/Middlepane.css';
import 'styles/verticalBoxes.css';

const PromoManagement = () => {
    const [editFormOpen, setEditFormOpen] = useState(false);

    return (
        <Middlepane>
            <div className="left">
                <PromoList setEditFormOpen={setEditFormOpen} />
            </div>
            <div className="right">
                <PromoForm 
                    editFormOpen={editFormOpen} 
                    setEditFormOpen={setEditFormOpen}
                />
            </div>
        </Middlepane>
    )
}

export default PromoManagement;