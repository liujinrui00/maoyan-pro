interface UserAccountInfo {
  account: string,
  password: string,
  userNick?: string,
  userHeadImg?: string,
  likeList?: string[]
}

interface UserLoginInfo {
  isLogged: boolean,
  userNick: string,
  defaultHeadImg: string,
  userHeadImg?: string | undefined,
  userAccountInfo: UserAccountInfo[],
}

interface HomeState {
  position: string
  showTabBar: boolean
  posId: number | undefined
}