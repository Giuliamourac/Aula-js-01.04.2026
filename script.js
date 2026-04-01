function teste()
{
    class Pessoa
    {
        #nome;
        #idade;
        #celular

        constructor(nome, idade)
        {
            this.#nome = nome;
            this.#idade = idade;
            this.#celular = null;
        }

        falar()
        {
            console.log("ola");
        }

        getCelular()
        {
            return this.celular;
        }

        setCelular()
        {
            this.celular = celular;
        }
    }

    class Celular
    {
        #marca;
        #modelo;
        #preco;
        #estado;

        constructor(marca, modelo, preco)
        {
            this.#marca = marca;
            this.#modelo = modelo;
            this.#preco = preco;
            this.#estado = false;
        }

        ligar()
        {
            if(!this.estado)
            {
                this.estado = true;
                return console.log("celular ligado");
            }
            else
            {
                return console.log("celular desligado");
            }
        }
    }

    let pessoa1 = new Pessoa("Kleber", 22);
    
    let celular = new Celular("Iphone", "12", 1500);

    console.log(pessoa1.falar());
    pessoa1.setCelular(celular);
    console.log(pessoa1.getCelular());



    // let celulares = new Celular[("Iphone", "xr", 1100), ("Samsung", "A20", 200), ("Samsung", "Galaxy pocket", 20)]

}