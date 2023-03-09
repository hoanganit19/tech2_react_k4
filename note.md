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
