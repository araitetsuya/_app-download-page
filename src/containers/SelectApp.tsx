import React from 'react'
import SelectApp from '../components/SelectApp'
import useSelectVersion from '../hooks/use-select-version'


const EnhancedSelectApp = () => {
    const versions = ['1.1.1', '1.1.0', '1.0.0']
    const [version, changeVersion] = useSelectVersion(versions[0])


    return <SelectApp versions={versions} version={version} changeVersion={changeVersion} />
}

export default EnhancedSelectApp