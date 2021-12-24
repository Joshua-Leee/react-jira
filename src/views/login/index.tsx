import styled from '@emotion/styled'
import { Form, Card, Input, Button, Divider } from 'antd'
import bgLeft from '../../assets/images/left.svg'
import bgRight from '../../assets/images/right.svg'
import logo from '../../assets/images/logo.svg'

const Login = () => {
  const onFinish = (val: any) => {
    console.log(val)
  }

  return (
    <LoginWrap>
      <MyCard>
        <ImgWrap>
          <Img src={logo} alt='logo' />
        </ImgWrap>
        <Form name='loginForm' onFinish={onFinish}>
          <Form.Item
            name='username'
            rules={[{ required: true, message: '请输入用户名' }]}>
            <Input placeholder='用户名' style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{ required: true, message: '请输入密码' }]}>
            <Input.Password placeholder='密码' style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' style={{ width: '100%' }}>
              登录
            </Button>
          </Form.Item>
        </Form>
        <MyDivider />
        <BtnWrap>
          <LinkButton type={'link'}>没有账号？注册新账号</LinkButton>
        </BtnWrap>
      </MyCard>
    </LoginWrap>
  )
}

const BtnWrap = styled.div`
  text-align: center;
`

const LinkButton = styled(Button)`
  padding: 0;
  line-height: 1;
`

const MyDivider = styled(Divider)`
  margin: 24px 0;
`

const ImgWrap = styled.div`
  width: 80px;
  margin: 0 auto 30px;
`

const Img = styled.img`
  width: 100%;
  height: auto;
`

const LoginWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-size: calc((100vw - 400px) / 2), calc((100vw - 400px) / 2), cover;
  background-image: url(${bgLeft}), url(${bgRight});
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20vh;
  box-sizing: border-box;
`

const MyCard = styled(Card)`
  width: 400px;
  height: 560px;
  padding: 32px 40px;
  box-sizing: border-box;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
`

export default Login
