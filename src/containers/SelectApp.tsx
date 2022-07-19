import React from 'react'
import SelectApp from '../components/SelectApp'
import useSelectVersion from '../hooks/use-select-version'
import versionData from '../uploads/versions.json'

const EnhancedSelectApp = () => {
    const versions = versionData
    const [version, changeVersion] = useSelectVersion(versions[0])


    return <SelectApp versions={versions} version={version} changeVersion={changeVersion} />
}

export default EnhancedSelectApp