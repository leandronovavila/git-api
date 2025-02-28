import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../Hooks/github-hooks";

const Header = () => {
    const {getUser} = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState();

    const submitGetUser = () => {
        if (!usernameForSearch) return;
        return getUser (usernameForSearch);
    };

    return (
        <header>
            <S.Wrapper>
                <input type="text" placeholder="Digite o nome do usuário para a pesquisa..."
                onChange={(event) => setUsernameForSearch(event.target.value)} />
                <button type="submit" onClick={submitGetUser}>
                    <span>Buscar</span>
                </button>
            </S.Wrapper>
        </header>
    );
};

export default Header;
