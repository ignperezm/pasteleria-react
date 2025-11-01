import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { BrowserRouter } from 'react-router-dom';
import Admin from "../components/Admin";

//TESTING NUMERO 1 - ADMIN
/////////////////////////////////////////////////////////////////////////////////////////////////////

describe("Página Admin", () => {
  test("TEST 1: verificar botones gestion", () => {
    render(
      <BrowserRouter>
        <Admin />
      </BrowserRouter>
    );

    ///// verifica botones
    const btnProductos = screen.getByRole('button', { name: /gestionar productos/i });
    const btnUsuarios = screen.getByRole('button', { name: /gestionar usuarios/i });

    expect(btnProductos).toBeVisible();
    expect(btnUsuarios).toBeVisible();
  });

//TESTING NUMERO 2 - SIMULACRO GESTION USUARIO
/////////////////////////////////////////////////////////////////////////////////////////////////////
  test("TEST 2: completar formulario save usu", () => {

    ///// mocking basico necesario
    const mockAlert = vi.fn();
    global.alert = mockAlert;

    render(
      <BrowserRouter>
        <Admin />
      </BrowserRouter>
    );

    ///// clickea boton 1
    const btnUsuarios = screen.getByRole('button', { name: /gestionar usuarios/i });
    fireEvent.click(btnUsuarios);

    ///// ceckeo por placeholder y rol boton
    const emailInput = screen.getByPlaceholderText(/email del usuario/i);
    const passwordInput = screen.getByPlaceholderText(/contraseña/i);
    const btnGuardar = screen.getByRole('button', { name: /💾 guardar/i });

    ///// rellena con texto generico
    fireEvent.change(emailInput, { target: { value: "nuevo@usuario.cl" } });
    fireEvent.change(passwordInput, { target: { value: "nueva123" } });

    ///// dispara el guardado
    fireEvent.click(btnGuardar);

    ///// verifica mensaje
    expect(mockAlert).toHaveBeenCalledWith("✅ Usuario guardado exitosamente");
    
  });
});