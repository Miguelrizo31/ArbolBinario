class arbol {
    constructor() {
        this.raiz = null;
    }

    agregarNodo(n) {
        if (this.raiz == null) {
            this.raiz = n;
        }
        else {
            this.add(n, this.raiz);
        }
    }
    add(nuevo, nodo) {
        if (nuevo.Id < nodo.Id) {
            if (nodo.izq == null) {
                nodo.izq = nuevo;
            }
            else {
                this.add(nuevo, nodo.izq);
            }
        }
        else {
            if (nodo.der == null) {
                nodo.der = nuevo;
            }
            else {
                this.add(nuevo, nodo.der);
            }
        }
    }
    trazo_inorder() {
        if (this.raiz == null) {
            console.log("");
        }
        else {
            this.recorre_inorder(this.raiz);
        }
    }
    recorre_inorder(nodo) {
        if (nodo.izq != null) {
            this.recorre_inorder(nodo.izq);
        }
        console.log(nodo);
        if (nodo.der != null) {
            this.recorre_inorder(nodo.der);
        }
    }
    trazo_preorder() {
        if (this.raiz == null) {
            console.log("");
        }
        else {
            this.recorre_preorder(this.raiz);
        }
    }
    recorre_preorder(nodo) {
        console.log(nodo);
        if (nodo.izq != null) {
            this.recorre_preorder(nodo.izq);
        }
        if (nodo.der != null) {
            this.recorre_preorder(nodo.der);
        }
    }
    trazo_posorder() {
        if (this.raiz == null) {
            console.log("");
        }
        else {
            this.recorre_posorder(this.raiz);
        }
    }
    recorre_posorder(nodo) {
        if (nodo.izq != null) {
            this.recorre_posorder(nodo.izq);
        }
        if (nodo.der != null) {
            this.recorre_posorder(nodo.der);
        }
        console.log(nodo);
    }

}
