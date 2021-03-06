import { BE_PARTNER_DATA, REGISTRATION_CLIENT, REGISTRATION_CLIENT_ERROR, AGREEMENT_DATA, ORDER_RESEARCH_DATA, BLOG_DATA, REGISTRATION_CLIENT_SUCCESS, BLOG_CARD_DATA, CLIENT_PAGE, CLIENT_DATA, NETWORK_DATA} from './constants';
import API from '../API';


export function registrationClientSuccess(){
  return {
    type: REGISTRATION_CLIENT_SUCCESS,
  };
}

export function AgreementData(){
  return async (dispatch)=>{
    await API.agreementData()
    .then(res => {
      dispatch({ type: AGREEMENT_DATA, payload: res })
    })}
}

export function networkData(){
  return async (dispatch)=>{
    await API.networkData()
    .then(res => {
      dispatch({ type: NETWORK_DATA, payload: res })
    })}
}

export function blogCardData(id){
  return async (dispatch)=>{
    await API.blogCardData(id)
    .then(res => {
      dispatch({ type: BLOG_CARD_DATA, payload: res })
    })}
}

export function BePartnerData(){
    return async (dispatch)=>{
      await API.bePartnerData()
      .then(res => {
        dispatch({ type: BE_PARTNER_DATA, payload: res })
      })}
}

export function clientPage(token){
  return async (dispatch)=>{
    await API.clientPage(token)
    .then(res => {
      dispatch({ type: CLIENT_PAGE, payload: res })
    })}
}

export function clientData(token){
  return async (dispatch)=>{
    await API.clientData(token)
    .then(res => {
      dispatch({ type: CLIENT_DATA, payload: res })
    })}
}

export function blogData(){
  return async (dispatch)=>{
    await API.blogData()
    .then(res => {
      dispatch({ type: BLOG_DATA, payload: res })
    })}
}

export function orderResearchData(){
  return async (dispatch)=>{
    await API.orderResearchData()
    .then(res => {
      dispatch({ type: ORDER_RESEARCH_DATA, payload: res })
    })}
}

export function errorClientReg() {
  return {
    type: REGISTRATION_CLIENT_ERROR,
  };
}

export function registrationClient(data){
  return async (dispatch)=>{
    await API.registrationClient(data)
    .then(res => {
      if( res.status == 201){
        dispatch({ type: REGISTRATION_CLIENT})
      }
    })
    .catch(err =>{
      console.log(err.response)
      dispatch({ type: REGISTRATION_CLIENT_ERROR})
    })

}
}

export function updateClient(data){
  return async (dispatch)=>{
    let token = localStorage.getItem("user");
    console.log(data);
    await API.updateClient(data, token)
    .then(res => {
      if( res.status == 200){
        dispatch({ type: 'POSTED_SUCCES_UPDATE_CLIENT'})
      }
    })
    .catch(err =>{
      dispatch({ type: 'POSTED__ERROR_UPDATE_CLIENT'})
    })

}
}
export function updateOrganization(data){
  return async (dispatch)=>{
    let token = localStorage.getItem("user");
    await API.updateDataOrganization(data, token)
    .then(res => {
      if( res.status == 200){
        dispatch({ type: 'POSTED_SUCCES_UPDATE_CLIENT'})
      }
    })
    .catch(err =>{
      dispatch({ type: 'POSTED__ERROR_UPDATE_CLIENT'})
    })

}
}

export function changePassword(data){
  return async (dispatch)=>{
    let token = localStorage.getItem("user");
    await API.changePassword(data, token)
    .then(res => {
      if( res.status == 200){
        dispatch({ type: 'POSTED_SUCCES_CHANGE_PASS'})
      }
    })
    .catch(err =>{
      dispatch({ type: 'POSTED__ERROR_CHANGE_PASS'});
    })

}
}

export function recoveryPassword(data){
  return async (dispatch)=>{
    const data1 = JSON.stringify(data)
    await API.recoveryPassword(data1)
    .then(res => {
      if( res.status == 200){
        dispatch({ type: 'POSTED_SUCCES_RECOVERY'})
      }
    })
    .catch(err =>{
      dispatch({ type: 'POSTED__ERROR_RECOVERY'});
    })
}
}

export function recoveryAfter(){
  return {
    type: 'POSTED__AFTER_RECOVERY'
  }
}

export function authAfter() {
  return {
    type: 'POSTED__AFTER_AUTH',
  };
}

// export function authSocialGetData(data) {
//   console.log(data);
//   return {
//     type: 'AUTH_SOCIAL_NETWORK', payload: data
//   };
// }


export function changeLang(data) {
  // let lang = localStorage.getItem('lang');
  return {
    type: 'CHANGE_LANG', payload: data
  };
}


export function updateClientAfter() {
  return {
    type: 'POSTED__AFTER_UPDATE_CLIENT',
  };
}

export function authSocial(token){
  return async (dispatch)=>{
    await API.authSocial('client', token)
    .then(res => {
      if( res.status == 200){
        localStorage.setItem('user', res.data.tokens.access);
        localStorage.setItem('type', 'client');
        localStorage.setItem('auth', 'social');
        dispatch({ type: 'POSTED_SUCCES_AUTH'})
      }
    })
    .catch(err =>{
        dispatch({ type: 'POSTED__ERROR_AUTH'})
    }
    );
}}

export function authSocialFace(token){
  return async (dispatch)=>{
    await API.authSocialFace('client', token)
    .then(res => {
      if( res.status == 200){
        
        localStorage.setItem('user', res.data.tokens.access);
        localStorage.setItem('type', 'client');
        localStorage.setItem('auth', 'social');
        dispatch({ type: 'POSTED_SUCCES_AUTH'})
      }
    })
    .catch(err =>{
        dispatch({ type: 'POSTED__ERROR_AUTH'})
    }
    );
}}

export function authSocialTwit(token, secret){
  return async (dispatch)=>{
    await API.authSocialTwit('client', token, secret)
    .then(res => {
      if( res.status == 200){
        localStorage.setItem('auth', 'social');
        localStorage.setItem('user', res.data.tokens.access);
        localStorage.setItem('type', 'client');
        dispatch({ type: 'POSTED_SUCCES_AUTH'})
      }
    })
    .catch(err =>{
        dispatch({ type: 'POSTED__ERROR_AUTH'})
    }
    );
}}

export function authClient({email, password}){
  return async (dispatch)=>{
    const data = JSON.stringify({email, password})
    await API.authClient(data)
    .then(res => {
      if( res.status == 200){
        dispatch(createToken(email, password));
      }
    })
    .catch(err =>{
      dispatch({ type: 'POSTED__ERROR_AUTH'})
    }
    );
}}


export function createToken(email, password){
  return async (dispatch)=>{
    const data = JSON.stringify({email, password})
    await API.createToken(data)
    .then(res => {
      if( res.status == 200){
        localStorage.setItem('user', res.data.access);
        localStorage.setItem('type', res.data.user);
        localStorage.setItem('refresh', res.data.refresh);
        const time = new Date().getDate();
        localStorage.setItem('time', time);
        dispatch({ type: 'POSTED_SUCCES_AUTH'})
      }
    })
    .catch(err =>{
      dispatch({ type: 'POSTED__ERROR_AUTH'})
    }
    )
}}

export function refreshToken(token) {
  return async (dispatch)=>{
    await API.refreshToken(token)
    .then(res => {
      if( res.status == 200){
        localStorage.setItem('user', res.data.access);
        const time = new Date().getDate();
        localStorage.setItem('time', time);
      }
    })
    .catch(err =>{
    }
    )
}
}

export function changePasswordAfter() {
  return {
    type: 'POSTED__AFTER_CHANGE_PASS',
  };
}
export function organData(token){
  return async (dispatch)=>{
    await API.organData(token)
    .then(res => {
      dispatch({ type: CLIENT_DATA, payload: res })
    })}
}
