import React from 'react'

const useSelectVersion = (latestVersion: string): [string, React.ChangeEventHandler<HTMLSelectElement>] => {
    const [version, setVersion] = React.useState(latestVersion)
    const changeVersion = (event: React.ChangeEvent<HTMLSelectElement>) => setVersion(event.target.value)

    return [version, changeVersion]
}

export default useSelectVersion;