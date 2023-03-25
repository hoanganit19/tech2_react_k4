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
