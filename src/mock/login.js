
export const login = req => {
  return {
    code: 0,
    data: {
      userInfo: { id: 1, userName: 'admin', userType: 'admin' },
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJpZCI6MSwidXNlck5hbWUiOiJhZG1pbiIsInVzZXJUeXBlIjoiYWRtaW4ifSwiaWF0IjoxNjM0Nzk5MDQxLCJleHAiOjE2MzUyMzEwNDF9.AtBYQFHOULsqefFUvxwpbEuOC0BAlqNwdMSG4ZetELk'
    }
  }
}

export const logout = req => {
  return { code: 0 }
}

export const currentUserInfo = req => {
  return {
    code: 0, data: { id: 1, userName: 'admin', userType: 'admin' }
  }
}
