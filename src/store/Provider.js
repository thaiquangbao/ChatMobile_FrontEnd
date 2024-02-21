
import { Zenchat } from './Context';
function Provider({ children }) {
    return (
        <Zenchat.Provider
            value={{
            }}>
            {children}
        </Zenchat.Provider>
    );
}

export default Provider;
