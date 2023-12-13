import React from 'react'
import { Menu } from 'lucide-react'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import NavigationSideBar from './navigation/navigation-sidebar'
import ServerSidebar from './server/server-sidebar'

function MobileToggle({ serverId }: { serverId: string }) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="sm:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side='left' className='p-0 flex gap-0'>
                <div className='w-[72px]'>
                    <NavigationSideBar />
                </div>
                <ServerSidebar serverId={serverId} />
            </SheetContent>
        </Sheet>
    )
}

export default MobileToggle