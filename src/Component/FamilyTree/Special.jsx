import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({name, asset }) => {
    const nweAsset = useContext(AssetContext);

    console.log('new asset', nweAsset);
    return (
        <div>
            <h3>Special: {name}</h3>
            <p>Asset: {asset}</p>
            <p>New Asset:{nweAsset}</p>
        </div>
    );
};

export default Special;