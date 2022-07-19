import React from 'react'
import './SelectApp.css'

type Props = {
    versions: string[],
    version: string,
    changeVersion: React.ChangeEventHandler<HTMLSelectElement>
}

const SelectApp: React.FC<Props> = ({versions, version, changeVersion}) => {
    return (
        <div>
            <select name="version" onChange={changeVersion}>
                {versions.map((version) => (
                    <option value={version} key={version}>{version}</option>
                ))}
            </select>

            <a href={`itms-services://?action=download-manifest&url=${process.env.REACT_APP_APP_URL}/${version}/manifest.plist`}>{version}</a>
        </div>
    )
}

export default SelectApp