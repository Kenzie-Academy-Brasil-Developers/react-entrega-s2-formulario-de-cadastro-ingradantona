import AuthProvider from './AuthContext';
import ToastProvider from './ToastContext';
import ModalProvider from './ModalContext';
import TechsProvider from './TechsContext';
import { ReactNode } from 'react';

interface IProvider {
  children: ReactNode
}

const Provider = ({ children }: IProvider) => (
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