import React from 'react';
import {render} from "enzyme";
import {BrowserRouter} from "react-router-dom";
import HomeHeader from "../../components/headers/HeaderHome";

describe('HomeHeader', () => {
  let loginState;
  let setLoginState;
  let currentUserState;
  let setCurrentUserState;

  beforeEach(() => {
    currentUserState = {
      userName: 'Woomin',
      profile: 'path',
    };
  });

  it('renders well', () => {
    const component = render(
      <BrowserRouter>
        <HomeHeader
          loginState={loginState}
          setLoginState={setLoginState}
          currentUserState={currentUserState}
          setCurrentUserState={setCurrentUserState}
        />
      </BrowserRouter>
    )

    expect(component).toMatchSnapshot();
    expect(component.text()).toMatch('Woomin');
    expect(component.text()).toMatch('홈');
    expect(component.text()).toMatch('로그아웃');
  });
})
