var magik = magikcraft.io;

var Material = magik.type('Material');

function p5() {
    var looking = magik.aspecto();
    var x0 = looking.getX();
    var y0 = looking.getY();
    var z0 = looking.getZ();

    function blast(X,Z, Y) {
        var location = looking;
        location.setX(X);
        location.setZ(Z);

        magik.shakti(location);
        var b = magik.getSender().getWorld().getBlockAt(location);
        while(b.getType().equals(Material.AIR)){
            Y--;
            location.setY(Y);
            b = location.getBlock();
        }
        magik.getSender().getWorld().getBlockAt(location).setType(Material.OBSIDIAN);
    }

    var r = 8;

    var items = 40;
    for(var i = 0; i < items; i++) {
        var x = x0 + r * Math.cos(2 * Math.PI * i / items);
        var z = z0 + r * Math.sin(2 * Math.PI * i / items);  
        blast(x,z,y0);
    }

}
