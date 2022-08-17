import AuthProvider from './AuthContext';
import ToastProvider from './ToastContext';
import ModalProvider from './ModalContext';
import TechsProvider from './TechsContext';

const Provider = ({ children }) => (
  <ToastProvider>
    <ModalProvider>
      <AuthProvider>
        <TechsProvider>
          {children}
        </TechsProvider>
      </AuthProvider>
    </ModalProvider>
  </ToastProvider>
);

export default Provider;