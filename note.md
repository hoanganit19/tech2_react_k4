Lưu ý:

- Các kiến thức đã ôn
- npm, yarn
- Module Bundle: webpack, babel,...
- Thư viện: lodash, moment,...
- Debounce Javascript: https://www.freecodecamp.org/news/javascript-debounce-example/
- SCSS: Biến, nested selector, @import, @mixin (@include)

Client-Side (Build giao diện, xử lý logic bằng Javascript)

- React JS
- Vue JS

Server Side (Build giao diện từ phía Server)

- Next JS
- Nuxt JS

React JS

Cài đặt React JS

- Cài đặt gói Create React App

Props

- Truyền dữ liệu từ Component cha sang Component con
- Trong component không thể thay đổi được dữ liệu (của props)

ví dụ: A => B (name) => B không thể được name

=> Khi prop thanh đổi => component con sẽ bị re-render

State

Refs

- Ref trong React chỉ tham chiếu được với Element (jsx)
- Nếu muốn tham chiếu ref thông qua Component => sử dụng forwardRef

Higher Order Component

- Component ở cấp cao hơn (Component bọc component)
- Kế thừa logic
- Kiến thức Closure Javascript

Context

- Context là 1 component
- Truyền và nhận dữ liệu tới nhiều cấp component mà không cần thông qua props
- Ứng dụng:

* Share data (state) giữa các component ngang hàng
* Xây dựng lên các State Management (Giống Redux)

Các thành phần của Context

- Context Object (Tạo bằng React.createContext)
- Provider => Gửi dữ liệu
- Consumer => Nhận dữ liệu

Lưu ý: Context áp dụng với cả class và functional component

Ví dụ: A => B => C => D

Quản lý State Global bằng Context

- Xây dựng 1 component `StateProvider`
- Bọc component `StateProvider` vào App.js hoặc index.js

# React Router DOM

- Giải quyết vấn đề đường dẫn
- Tính tuyến url

# React Hook

- Hook là function đặc biệt (Bắt đầu bằng từ khóa use)
- Hook chỉ gọi được trong functional component và top level trong functional component

function Home(){
//call hook
const getName = () => {
//Không được hook ở đây
}
}

- Hook trong React JS ngoài những hook do thư viện React tạo ra thì các lập trình viên có thể tự tạo Hook (Tạo function bắt đầu bằng từ khóa use)
- Ngoài ra, các hook sẽ tồn tại bên trong các thư viện được cài thêm vào:

* React Router Dom
* Redux

## Nội dung sẽ học về React Hook

- Hook API (Hook có sẵn của React)
- Custom Hook (Tự tạo hook riêng)

1. useState => Làm việc với state
2. useEffect => Làm việc với Component Lifecycle
3. useContext => Lấy dữ liệu từ context
4. useRef => Làm việc với refs
5. useReducer => Làm việc với state nâng cao (reducer)
6. useCallback => Tránh việc khởi tạo lại hàm trong Functional Component
7. useMemo => Tránh việc chạy lại logic trong funcional component
8. useTransition
9. useDeferredValue
   => Liên quan đến hiệu năng
10. useId => tự động tạo id cho các field trong form
11. useImperativeHandle => Hỗ trợ quản lý ref
12. useLayoutEffect => giống useEffect chỉ khác thứ tự hoạt động

### Hook useReducer

- reducer => Function (Giống function của vòng lặp reducer)
- actions: Object {type, payload}

* type: ten_feature/ten_action
* payload: Data dispatch

- Action Creators => Function return về 1 action (object)

### Build State Provider sử dụng useReducer + Context API

### Tìm hiểu thêm 1 số hook

- React Hook Form
- Hook của React Router Dom (Bản 6)
- Redux: useDispatch, useSelector => Sẽ được dạy

### Custom Hook

- useColor
- useClock
- useCountdown
- useClient

## Redux

- State => Chỉ hoạt động trong nội bộ component
- Share State giữa các component

* Render Props
* Context API
* Thư viện ngoài: Redux

Redux cần phải học gì?

- Redux Core
- Redux Toolkit => Bản đóng gói của Redux (Giống Create React App)
- Redux Middleware: Thunk, Saga => Thường được sử dụng để call api

Redux không phải sinh ra để dành cho React

Các thành phần của Redux

- Store => Kho chung để quản lý State
- Reducer => function
- Action => Object
- Action Creator => Hàm trả về action
- Dispatch => Gửi action từ UI (Component) tới Reducer của Redux => Cập nhật vào State trên Store của Redux
- Selector => Lấy State từ Store của Redux để sử dụng cho Component

Hook

- useDispatch()
- useSelector()

Redux Thunk

- nó là 1 function
- Dạng closure => Return về 1 function (dispatch, getState)

UI (Component) => Dispatch tới Middlware (Call api) => Dispatch tới Reducer => Reducer set State

UI (Component) => Selector từ Reducer

## Authentication

### Đăng nhập

- Login
- Trả về Token
- Lưu token vào localStorage hoặc sessionStorage, Cookie

### Trang tài khoản

- Call api `/getInfo` => Kèm theo token
- Trả về full thông tin liên quan user đã đăng nhập
- Cập nhật tài khoản => Call api `updateInfo` => Kèm theo token

### Trang đăng ký

- Đăng ký
- Trả về token
- Lưu token vào localStorage hoặc sessionStorage, Cookie
- Ngoài ra: Xác thực tài khoản (Link qua email, otp qua email hoặc sms)

### Đăng xuất

- Call api `/logout`, kèm theo thiết bị
- Server xử lý xóa token => Trả về trạng thái
- Xóa token ở sessionStorage hoặc localStorage, Cookie

### Lấy các tài nguyên Private

- Call api cần lấy (`/products`)
- Kèm theo Token: Bearer, api key, OAuth,...
- Server trả về kết quả (có dữ liệu và lỗi xác thực)

### Quên mật khẩu

- Call api `/forgot-password` => Kèm email (phone, username) => Server kiểm tra xem tồn tại hay không?

* Tồn tại => Tạo token (reset token) => Gửi email
* Không tồn tại => Trả về response để client thông báo

- Click vào link trong email
- Call api `/reset-password` kèm theo reset token
- Server check reset token có tồn tại hay không? => Trả về trạng thái
- Client kiểm tra trạng thái

* Nếu success => hiển thị form đặt lại mật khẩu (mật khẩu mới, nhập lại mật khẩu mới)
* Nếu failed => Thông báo: `Liên kết này không tồn tại hoặc đã hết hạn`

- Call api `/update-password` => Thông báo đặt lại mật khẩu thành công => Xóa tất cả token (Server xử lý)

### Đăng nhập mạng xã hội

- Facebook
- Google
- Github

=> Back-End xử lý
=> Front-End chỉ việc call api

- FrontEnd call api `/login-social?provider=facebook`, `/login-social?provider=goolge`
- Server xử lý => Trả về link Redirect qua trang Facebook
- Client redirect tới link mà back-end trả về
- Facebook chuyển hướng về link callback (Thiết lập trong phần Facebook Developers)
- Call api tới back-end (kèm theo accessToken của Facebook)
- Server xử lý: truy xuất thông người dùng trên Facebook => Xử lý đăng nhập => Trả về Token
- Client cập nhật token vào sessionStorage hoặc localStorage, Cookie

### Case Study đăng nhập

1. Đăng nhập thông qua OTP

- Nhập email và sdt
- OTP sẽ gửi vào email hoặc sdt
- Nhập OTP vào giao diện web
- Đăng nhập thành công
  => Dynamic Password

2. Đăng nhập thông qua link

- Nhập email
- Nhận được link qua email
- Click vào link
- Tự động đăng nhập

3. 1 tài khoản chỉ đăng nhập được ở 1 thiết bị

- Tại 1 thời điểm chỉ có 1 thiết bị được online
- Giới hạn theo thiết bị: Thiết bị đăng nhập quen (Giống phần checkpoint của Facebook)
- Thiết lập theo số lượng thiết bị

### Demo Authentication

- Khi login => call api => cập nhật trạng thái lên Redux => Re-render tất cả các component
- Khi đăng ký => call api => cập nhật trạng thái lên redux => Re-render tất cả các component
- Đăng xuất => call api => cập nhật trạng thái lên redux => Re-render tất cả các component
- Header

* Lấy state từ Redux để hiển thị lên UI
* Dispatch => fetchUser => Update vào state user

Lưu ý: Nếu component nào muốn lấy user => useSelector tới redux để lấy user (thông tin user, trạng thái đăng nhập)

### Đăng nhập ủy quyền

- Build Server riêng
- Sử dụng qua các dịch vụ trung gian: Auth0, Firebase,...

### Gửi email cho khách hàng

- Bảo back-end viết => Call api
- Sử dụng qua các dịch vụ trung gian: Emailjs

### UI Components

- MUI
- ANT Design
- React Bootstrap
- atlaskit
- prime react
- evergreen

### Dự án cuối khóa

- Web bán hàng
